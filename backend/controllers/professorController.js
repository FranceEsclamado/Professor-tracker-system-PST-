/**3.  ( Controler )
receives requests from the Routes API (backend/routes/...),
talks to the Database via the Model (backend/models/...), 
and sends a Response back to React.
*/
import Professor from '../models/Professor.js';

// {   Proffesor
export const createProfessor = async (req, res) => {
  try {
    const { name, facultyId, department, status } = req.body;
    const newProfessor = await Professor.create({
      name,
      facultyId,
      department,
      status
    });

 
    res.status(201).json({
      message: 'Faculty member created successfully',
      professor: newProfessor
    });

  } catch (error) {

    res.status(400).json({ message: error.message });
  }
};

export const getProfessors = async (req, res) => {
  try {
    const professors = await Professor.find({}).sort({ createdAt: -1 });
    res.json(professors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProfessor = async (req, res) => {
  try {
    const professor = await Professor.findById(req.params.id);

    if (!professor) {
      return res.status(404).json({ message: 'Professor not found' });
    }

    await professor.deleteOne();

    res.json({ message: 'Professor removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


export const updateProfessor = async (req, res) => {
  try {
    const updated = await Professor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Professor not found' });
    }

    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// }