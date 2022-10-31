using Microsoft.AspNetCore.ResponseCompression;
using SMD.Web;
using SMD.Web.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddResponseCompression(options =>
{
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(
        new[] { "application/octet-stream" });
});

builder.Services.AddHostedService<Worker>();

const string CorsPolicy = "CorsPolicy";

builder.Services.AddCors(options => options.AddPolicy(CorsPolicy, policyBuilder =>
{
    policyBuilder.AllowAnyHeader()
        .AllowAnyMethod()
        .SetIsOriginAllowed(host => true)
        .AllowCredentials();
}));

builder.Services.AddSignalR(config =>
    config.EnableDetailedErrors = true);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(CorsPolicy);

app.MapHub<VehicleHub>("/hubs/vehicles");

app.MapControllers();

app.Run();