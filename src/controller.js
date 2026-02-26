const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, perfil_nome } = req.body;

    const usuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha,
        perfil: {
          create: {
            perfil_nome
          }
        }
      },
      include: {
        perfil: true
      }
    });

    res.status(201).json(usuario);
  } catch (error) {
    console.error(error);
    res.status(400).json({ erro: "Email já cadastrado ou erro nos dados" });
  }
};

exports.listarUsuarios = async (req, res) => {
  const usuarios = await prisma.usuario.findMany({
    include: {
      perfil: true
    }
  });

  res.json(usuarios);
};