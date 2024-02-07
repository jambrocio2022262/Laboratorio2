const {Router} = require('express');
const {check} = require('express-validator');

const {validarCampos} = require('../middlewares/validar-campos');

const{
     mascotasPost,
     mascotasGet,
     mascotaDelete,
     getMascotaById
} = require('../controllers/mascota.controller');

const { existeMascotaById } = require('../helpers/db-validators');

const router = Router();

router.get("/",mascotasGet);

router.get(
    "/:id",
    [
        check('id','No es un id valido').isMongoId(),
        check('id').custom(existeMascotaById),
        validarCampos,
    ], getMascotaById);

router.post(

    "/",
    [
        check("nombre", "El nombre no puede estar vacio").not().isEmpty(),
        check("especie", "La especie no puede estar vacia").not().isEmpty(),
        check("edad","La edad no puede estar vacia").not().isEmpty(),
        check("color","El color no puede estar vacio").not().isEmpty(),
        check("tamaño", "No debe de estar vacio").not().isEmpty(),
        check("peso", "El peso no debe de estar vacio").not().isEmpty(),
        validarCampos,
    ],mascotasPost);

    router.delete(
        "/:id",
        [
            check('id','No es un id valido').isMongoId(),
            check('id').custom(existeMascotaById),
        ], mascotaDelete)

    module.exports = router;