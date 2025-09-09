import Notes from "../model/notesModel.js";

//Get all notes
export async function getAllNotes(_,res) {
    try {
        const notes = await Notes.find().sort({createdAT: -1});
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in Controller",error);
        res.status(500).json({message:"Inetrnal server error"});
    }
}

//Get one note by ID
export async function getNoteBYId(req,res){
    try {
        const note = await Notes.findById(req.params.id);
        //checking note is availbale or not
        if(!note){
            return res.status(404).json({message:"Note not found"});
        }
        res.json(note);
    } catch (error) {
        console.error("Error in Controller",error);
        res.status(500).json({message:"Inetrnal server error"});
    }
}

//creating the note
export async function createNotes(req,res) {
    try {
        const {title, content} = req.body;
        const note = new Notes({title, content})
        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in Controllers",error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

//update the notes by ID
export async function updateNotes(req,res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Notes.findByIdAndUpdate(
            req.params.id,
            {title, content},
            {
                new: true
            }
        );
        //checking if the note available or not
        if(!updatedNote){
            return res.status(404).json({message:"Note not found"});
        }
        res.json(updatedNote);
    } catch (error) {
         console.error("Error in Controllers",error);
         res.status(500).json({message:"Internal Server Error"});
    }
}

//delete the notes by ID
export async function deleteNotes(req,res) {
    try {
        const deletedNote = await Notes.findByIdAndDelete(req.params.id);

        //checking if the note available or not
        if(!deletedNote){
            return res.status(404).json({message:"Internal server error"});
        }
        res.json(deletedNote);
    } catch (error) {
         console.error("Error in Controllers",error);
         res.status(500).json({message:"Internal Server Error"});
    }
    
}