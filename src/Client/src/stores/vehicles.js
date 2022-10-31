import { writable, derived, get } from 'svelte/store'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'

const vehicles = writable([])

const selectedVehicleId = writable('')

const currentTemperature = writable(null)

let connection = new HubConnectionBuilder()
  .withAutomaticReconnect()
  .withUrl('https://localhost:7104/hubs/vehicles')
  .configureLogging(LogLevel.Information)
  .build()

connection.on('MessageReceived', ({ type, payload }) => {
  console.log(type, payload)

  switch (type) {
    case 'VEHICLE_ADDED':
      vehicles.update((items) => {
        return [...items, payload]
      })
      break
    case 'TELEMETRY_RECEIVED':
      vehicles.update((items) => {
        return items.map((item) => {
          const id = get(selectedVehicleId)
          if (item.id === id) {
            return { ...item, temperature: payload.temperature }
          }
          return item
        })
      })
      break
  }
})

const establishConnection = async () => {
  await connection.start()
}

const grantedVehicles = derived(vehicles, ($vehicles) => {
  return $vehicles.filter((vehicle) => vehicle.access)
})

const selectedVehicle = derived([selectedVehicleId, vehicles], ([$selectedVehicleId, $v]) => {
  return $v.find((vehicle) => vehicle.id === $selectedVehicleId)
})

const grantVehicleAccess = (id) => {
  vehicles.update((items) => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, access: true }
      }
      return item
    })
  })
}

const revokeVehicleAccess = (id) => {
  vehicles.update((items) => {
    return items.map((item) => {
      if (item.id === id) {
        return { ...item, access: false }
      }
      return item
    })
  })
}

const getVehicle = (id) => {
  $vehicles.find((item) => item.id === id)
}

const fetchVehicles = async () => {
  var res = await fetch('https://localhost:7104/api/vehicles')
  var data = await res.json()
  vehicles.set(data)
}

const joinVehicleBroadcast = async (id) => {
  try {
    await connection.invoke('JoinVehicleBroadcast', id)
  } catch (err) {
    console.error(err)
  }
}

const leaveVehicleBroadcast = async (id) => {
  try {
    await connection.invoke('LeaveVehicleBroadcast', id)
  } catch (err) {
    console.error(err)
  }
}

establishConnection()
fetchVehicles()

export {
  grantVehicleAccess,
  grantedVehicles,
  revokeVehicleAccess,
  getVehicle,
  vehicles,
  selectedVehicleId,
  joinVehicleBroadcast,
  leaveVehicleBroadcast,
  currentTemperature
}
