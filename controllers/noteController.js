const Note = require('../models/Note');

exports.getNotes = async (req, res) => {
  const userId = req.user.id;
  const notes = await Note.find({ user: userId }).sort({ updatedAt: -1 });
  res.json(notes);
};

exports.createNote = async (req, res) => {
  const userId = req.user.id;
  const { title, content, tags } = req.body;

  const newNote = await Note.create({
    user: userId,
    title,
    content,
    tags,
  });

  res.status(201).json(newNote);
};

exports.updateNote = async (req, res) => {
  const userId = req.user.id;
  const note = await Note.findOne({ _id: req.params.id, user: userId });

  if (!note) return res.status(404).json({ message: 'Note not found' });

  note.title = req.body.title || note.title;
  note.content = req.body.content || note.content;
  note.tags = req.body.tags || note.tags;
  note.updatedAt = Date.now();

  await note.save();
  res.json(note);
};

exports.deleteNote = async (req, res) => {
  const userId = req.user.id;
  const note = await Note.findOneAndDelete({ _id: req.params.id, user: userId });

  if (!note) return res.status(404).json({ message: 'Note not found' });

  res.json({ message: 'Note deleted' });
};
