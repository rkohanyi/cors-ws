var builder = WebApplication.CreateBuilder(args);
// builder.Services.AddCors(options =>
// {
//     options.AddDefaultPolicy(
//         policy =>
//         {
//             policy.WithOrigins("http://localhost:5173")
//                   .AllowAnyHeader()
//                   .AllowAnyMethod();
//         });
// });
var app = builder.Build();

app.MapGet("/hi", () => "Hi, it's ASP.NET Core 👋");
// app.UseCors();
app.Run();
