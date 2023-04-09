import Cours from "../models/coursModel.js";


//create new Cours
export const createCours = async(req, res) => { 
    const{
        theme,
        nbLessons,
        description,
        active,
        duration
         } = req.body;
    try {
        await Cours.create({
        theme,
        nbLessons,
        description,
        active,
        duration
        });
        res.json({msg: "Cours created Successfully"});
    } catch (error) {
        res.json({msg: "Cours Already exists"});
        console.log(error);
    }
}

//get all cours
export const getCours = async(req, res) =>{
    try {
        const response = await Cours.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


// 4. update Cours

export const updateCours = async (req, res) => {

    let theme = req.params.theme

     await Cours.update(req.body, { where: { theme: theme }})

    res.status(200).send("Cours is updated")
   

}

// 5. delete Cours by theme

export const deleteCours = async (req, res) => {

    let theme = req.params.theme
    
    await Cours.destroy({ where: { theme: theme }} )

    res.status(200).send('Cours is deleted !')

}