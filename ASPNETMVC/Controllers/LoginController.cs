using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETMVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETMVC.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public bool AutenticarUsuario(LoginModels model)
        {
            string senhaCriptografada = UtilController.GetHash(model.senha);
            
            //puxa os dados do usuario para comparar a senha salva
            string senhaSalva = "";

            return senhaCriptografada == senhaSalva;
        }

        public bool RegistrarUsuario(LoginModels model)
        {
            string senhaCriptografada = UtilController.GetHash(model.senha);

            //Salva o usuario no banco            
            return true;
        }
    }
}