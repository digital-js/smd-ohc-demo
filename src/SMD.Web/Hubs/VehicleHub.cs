using Microsoft.AspNetCore.SignalR;

namespace SMD.Web.Hubs;

public class VehicleHub : Hub
{
    public async Task JoinVehicleBroadcast(Guid vehicleId)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, vehicleId.ToString());
    }

    public async Task LeaveVehicleBroadcast(Guid vehicleId)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, vehicleId.ToString());
    }
}