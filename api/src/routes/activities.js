const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();

router.get("/activity", async (req, res) => {
  try {
    const getAllActivities = await Activity.findAll();
    getAllActivities.length
      ? res.status(200).json(getAllActivities)
      : res.status(404).send("No se encontraron actividades");
  } catch (error) {
    console.log("ACA ESTA OTRO ERROR", error);
  }
});

router.post("/activity", async (req, res) => {
  const {
    name,
    dificulty,
    duration,
    season,
    countries,

  } = req.body;
  try {
    const Createactivity = await Activity.create({
      name,
      dificulty,
      duration,
      season,
    });

    const country = await Country.findAll({
      where: { id: countries },
    });
    await Createactivity.addCountries(country);

    return res.send(Createactivity);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
