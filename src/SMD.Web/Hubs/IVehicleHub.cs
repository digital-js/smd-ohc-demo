using SMD.Web.Models;

namespace SMD.Web.Hubs;

public interface IVehicleHub
{
    Task VehicleAdded(Vehicle vehicle, CancellationToken cancellationToken);

    Task VehicleTelemetryUpdated(Telemetry telemetry, CancellationToken cancellationToken);
}