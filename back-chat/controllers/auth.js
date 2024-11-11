const express = require('express');
const bcrypt = require('bcryptjs');
const {validationResult} = require('express-validator');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = express.request) => {
    const {name,email,password} = req.body;
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({
            ok:false,
            errors:errors.mapped()
        })
    }

    try{

        let usuario = await Usuario.findOne({email:email})
        if(usuario) 
        {
            return res.status(400).json({
                ok:false,
                msg:'El usuario con ese correo ya existe.'
            });
        }

        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        res.status(200).json({
            ok:true,
            usuario,
            msg:'El usuario se registro exitosamente.'
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            error,
            msg:'Error al crear el usuario.'
        });
    }

};

const loginUsuario = async (req, res = express.request) => {
    const {email,password} = req.body;

    try {
        let usuario = await Usuario.findOne({email:email})
        if(!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe.'
            });
        }

        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if(!passwordValid) {
            return res.status(400).json({
                ok:false,
                msg: 'La password NO es valida.'
            });
        }

        res.status(200).json({
            ok:true,
            usuario,
            msg:`Bienvenido!! ${usuario.name}`
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            error,
            msg:'Error al loguearse.'
        });
    }
};

const getUsers = async (req,res) => {
    try {
        let usuarios = await Usuario.find().select('name email');
        res.status(200).json({
            ok:true,
            usuarios
        });
    } catch(error) {
        res.status(500).json({
            ok:false,
            msg:'Error obteniendo los usuarios.'
        })
    }
}

const revalidarToken = (req, res = express.request) => {
    res.json({
        ok: true
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    getUsers
}