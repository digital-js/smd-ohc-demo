using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SMD.Web.Hubs;
using SMD.Web.Models;

namespace SMD.Web.Controllers;

[ApiController]
[Route("api/vehicles")]
public class VehicleController : ControllerBase
{
    private readonly IHubContext<VehicleHub> _hubContext;
    private readonly ILogger<VehicleController> _logger;

    public static readonly List<Vehicle> Vehicles = new()
    {
        new Vehicle(Guid.NewGuid(), "AtomEV Q1234", false)
    };

    public VehicleController(IHubContext<VehicleHub> hubContext, ILogger<VehicleController> logger)
    {
        _hubContext = hubContext;
        _logger = logger;
    }

    [HttpGet(Name = "GetVehicles")]
    public IEnumerable<Vehicle> Get()
    {
        _logger.LogInformation("Get all vehicles");

        return Vehicles;
    }

    [HttpPost(Name = "PostVehicles")]
    public async Task<IActionResult> Post(NewVehicle newVehicle, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Add new vehicle");

        var vehicle = new Vehicle(Guid.NewGuid(), newVehicle.Name, newVehicle.Access);

        Vehicles.Add(vehicle);

        await _hubContext.Clients.All.SendAsync(MessageNotifications.MessageReceived, new VehicleAddedMessage(vehicle),
            cancellationToken);

        return Accepted(vehicle);
    }
}