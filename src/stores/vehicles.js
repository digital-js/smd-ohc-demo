// @ts-nocheck
import { writable, derived } from 'svelte/store'

const vehicles = writable([
  {
    id: '93ae7a31-0545-4c75-bc7a-8bd75f80b7b2',
    name: 'AtomEV Q1234',
    access: false
  },
  {
    id: '1bfd132f-c454-4e5c-b529-4dbca33ee49b',
    name: 'QuantumEV Q5678',
    access: false
  },
  {
    id: '6f517211-8b9b-4c2f-a1df-c170494289c3',
    name: 'AtomEV Q4321',
    access: false
  },
  {
    id: ' 6e42ec2d-0d05-4c68-88d3-0453e3e2ce07',
    name: 'QuantumEV Q1234',
    access: false
  }
])

const selectedVehicleId = writable('')

const grantedVehicles = derived(vehicles, ($vehicles) => {
  return $vehicles.filter((vehicle) => vehicle.access)
})

const vehicle = derived([selectedVehicleId, vehicles], ([$selectedVehicleId, $vehicles]) => {
  return $vehicles.find((vehicle) => vehicle.id === $selectedVehicleId)
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

const selectVehicle = (id) => {
  selectedVehicleId.set(id)
}

const unSelectVehicle = (id) => {
  selectedVehicleId.set('')
}

export {
  grantVehicleAccess,
  grantedVehicles,
  revokeVehicleAccess,
  selectVehicle,
  unSelectVehicle,
  vehicle,
  vehicles
}
