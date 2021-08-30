using System;
using System.Linq;
using backEndAPi.Data;
namespace backEndAPi.Models
{
    public static class InicializaBD
    {
        public static void Initialize(DataContext context)
        {
            context.Database.EnsureCreated();
            // Procura por livros
            if (context.diretorios.Any())
            {
                return;   //O BD foi inicializado
            }
            var diretorio = new Directories[]
            {
              new Directories{idDiretorio="ce71961d-d593-46aa-86f9-07d89d12eabf", nome="Quadrados"},
              new Directories{idDiretorio="9447b769-f783-4ffe-a565-6ed9ca106938", nome="Triângulos"},
            };
            foreach (Directories p in diretorio)
            {
                context.diretorios.Add(p);
            }
            context.SaveChanges();
        }
    }
}