namespace SMD.Web.Models;

public sealed record Vehicle(
    Guid Id,
    string Name,
    bool Access);