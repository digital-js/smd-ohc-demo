FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["src/SMD.Web/SMD.Web.csproj", "SMD.Web/"]
RUN dotnet restore "src/SMD.Web/SMD.Web.csproj"
COPY . .
WORKDIR "/src/SMD.Web"
RUN dotnet build "SMD.Web.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SMD.Web.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SMD.Web.dll"]
