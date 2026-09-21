using FotballApi.Core.Repositoris.Interfaces;
using FotballApi.Core.Repositoris;
using FotballApi.Controllers;

namespace FotballApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("Frontend",
                    policy =>
                    {
                        policy
                            .WithOrigins("http://localhost:5173")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                    });
            });

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
            builder.Services.AddOpenApi();

            builder.Services.AddHttpClient<IFotballApiClient, FotballApiClient>(client =>
            {
                client.BaseAddress = new Uri("https://v3.football.api-sports.io");

                client.DefaultRequestHeaders.Add(
                    "x-apisports-key",
                    "c9c6c94ef404653a5142cc08d959fa5c"
                );
            });



            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.MapOpenApi();
            }
            app.UseCors("Frontend");

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
