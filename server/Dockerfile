FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build-env

EXPOSE 80
EXPOSE 443

# Copy csproj and restore as distinct layers
WORKDIR /src
COPY *.sln ./
COPY Api/Api.csproj ./Api/
COPY Api.Tests/Api.Tests.csproj ./Api.Tests/
RUN dotnet restore

# Copy everything else and build
COPY . .
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime
WORKDIR /src
COPY --from=build-env /src/Api/out ./

ENTRYPOINT ["dotnet", "Api.dll"]