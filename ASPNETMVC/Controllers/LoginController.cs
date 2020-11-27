using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETMVC.Contexto;
using ASPNETMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace ASPNETMVC.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        
        public JObject AutenticarUsuario(LoginModels model)
        {
            try
            {
                string senhaCriptografada = UtilController.GetHash(model.senha);

                ASPNETMVC.Contexto.Contexto cntx = new ASPNETMVC.Contexto.Contexto();

                Usuario usuario = cntx.database.Usuarios.Where(x => x.Email == model.email && x.Senha == senhaCriptografada).FirstOrDefault();

                if (usuario == null)
                    throw new Exception("Email ou senha incorreta :/");

                return new JObject()
                {
                    { "processado", true },
                    { "mensagem", "" }
                };
            }
            catch (Exception e)
            {
                return new JObject()
                {
                    { "processado", false },
                    { "mensagem", e.Message }
                };
            }
        }

        public JObject RegistrarUsuario(LoginModels model)
        {
            try
            {
                string senhaCriptografada = UtilController.GetHash(model.senha);

                ASPNETMVC.Contexto.Contexto cntx = new ASPNETMVC.Contexto.Contexto();

                Usuario usuario = cntx.database.Usuarios.Where(x => x.Email == model.email).FirstOrDefault();

                if (usuario == null)
                {
                    usuario = new Usuario();
                    usuario.Nome = model.nomeCompleto;
                    usuario.Senha = senhaCriptografada;
                    usuario.Email = model.email;
                    usuario.HashId = UtilController.GetHash(model.nomeCompleto + senhaCriptografada + model.email + DateTime.Now);
                }
                else
                    throw new Exception("Já existe um usuário registrado com esse email :/");

                cntx.database.Add(usuario);
                bool retorno = cntx.database.SaveChanges() > 0;

                return new JObject()
                {
                    { "processado", retorno },
                    { "mensagem", "" }
                };
            }
            catch (Exception e)
            {
                return new JObject()
                {
                    { "processado", false },
                    { "mensagem", e.Message }
                };
            }
        }
    }
}