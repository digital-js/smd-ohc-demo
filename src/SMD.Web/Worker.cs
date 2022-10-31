using Microsoft.AspNetCore.SignalR;
using SMD.Web.Controllers;
using SMD.Web.Hubs;
using SMD.Web.Models;

namespace SMD.Web;

public class Worker : BackgroundService
{
    private readonly ILogger<Worker> _logger;
    private readonly IHubContext<VehicleHub> _hubContext;

    public Worker(ILogger<Worker> logger, IHubContext<VehicleHub> hubContext)
    {
        _logger = logger;
        _hubContext = hubContext;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        var random = new Random();

        while (!stoppingToken.IsCancellationRequested)
        {
            foreach (var vehicle in VehicleController.Vehicles)
            {
                var telemetry = new Telemetry(random.Next(-100, 100).ToString());
                _logger.LogInformation("Broadcasting vehicle telemetry: {Vehicle} {Temperature}", vehicle.Id,
                    telemetry.Temperature);
                await _hubContext
                    .Clients
                    .Group(vehicle.Id.ToString())
                    .SendAsync(MessageNotifications.MessageReceived, new TelemetryReceived(telemetry), stoppingToken);
            }

            await Task.Delay(3000, stoppingToken);
        }
    }
}