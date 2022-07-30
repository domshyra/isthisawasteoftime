using Api.Cosmos.Tables;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "MyPolicy",
                policy =>
                {
                    policy.WithOrigins("https://localhost:7028/", "https://localhost:3000")
                            .WithMethods("POST", "PUT", "DELETE", "GET");
                });
});

// Register interface and classes
builder.Services.AddScoped<ICosmosTableRepository, CosmosTableRepository>();
builder.Services.AddScoped<ICosmosTableCRUD, CosmosTableCRUD>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("MyPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
