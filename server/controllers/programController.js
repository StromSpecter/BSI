const { Programs } = require("../models");
const fs = require("fs");
const path = require("path");

// Create new program
exports.createProgram = async (req, res) => {
  try {
    const { title, author, date, description } = req.body;
    const icon = req.files["icon"] ? req.files["icon"][0].filename : null;
    const image1 = req.files["image1"] ? req.files["image1"][0].filename : null;
    const image2 = req.files["image2"] ? req.files["image2"][0].filename : null;

    const newProgram = await Programs.create({
      title,
      icon,
      author,
      date,
      description,
      image1,
      image2,
    });

    res.status(201).json(newProgram);
  } catch (error) {
    console.error("Error creating program:", error); // Log error for debugging
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Get all programs
exports.getPrograms = async (req, res) => {
  try {
    const programs = await Programs.findAll();
    res.status(200).json(programs);
  } catch (error) {
    console.error("Error fetching programs:", error); // Log error for debugging
    res.status(500).json({ error: "Something went wrong" });
  }
};

// Update program by ID
exports.updateProgram = async (req, res) => {
  try {
    const program = await Programs.findByPk(req.params.id);

    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }

    const { title, author, date, description } = req.body;

    // Handle new files
    const icon = req.files["icon"]
      ? req.files["icon"][0].filename
      : program.icon;
    const image1 = req.files["image1"]
      ? req.files["image1"][0].filename
      : program.image1;
    const image2 = req.files["image2"]
      ? req.files["image2"][0].filename
      : program.image2;

    // Delete old files if new ones are provided
    if (req.files["icon"] && program.icon) {
      const oldIconPath = path.resolve(
        __dirname,
        "..",
        "uploads",
        program.icon
      );
      if (fs.existsSync(oldIconPath)) {
        fs.unlink(oldIconPath, (err) => {
          if (err) console.error("Error deleting old icon:", err);
        });
      }
    }
    if (req.files["image1"] && program.image1) {
      const oldImage1Path = path.resolve(
        __dirname,
        "..",
        "uploads",
        program.image1
      );
      if (fs.existsSync(oldImage1Path)) {
        fs.unlink(oldImage1Path, (err) => {
          if (err) console.error("Error deleting old image1:", err);
        });
      }
    }
    if (req.files["image2"] && program.image2) {
      const oldImage2Path = path.resolve(
        __dirname,
        "..",
        "uploads",
        program.image2
      );
      if (fs.existsSync(oldImage2Path)) {
        fs.unlink(oldImage2Path, (err) => {
          if (err) console.error("Error deleting old image2:", err);
        });
      }
    }

    // Update program
    await program.update({
      title,
      author,
      date,
      description,
      icon,
      image1,
      image2,
    });

    res.status(200).json(program);
  } catch (error) {
    console.error("Error updating program:", error); // Log error for debugging
    res.status(500).json({ error: "Something went wrong" });
  }
};


// Delete program by ID
exports.deleteProgram = async (req, res) => {
  try {
    const program = await Programs.findByPk(req.params.id);

    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }

    if (program.icon) {
      const iconPath = path.resolve(__dirname, "..", "uploads", program.icon);
      if (fs.existsSync(iconPath)) {
        fs.unlink(iconPath, (err) => {
          if (err) console.error("Error deleting icon:", err);
        });
      }
    }

    if (program.image1) {
      const image1Path = path.resolve(
        __dirname,
        "..",
        "uploads",
        program.image1
      );
      if (fs.existsSync(image1Path)) {
        fs.unlink(image1Path, (err) => {
          if (err) console.error("Error deleting image1:", err);
        });
      }
    }

    if (program.image2) {
      const image2Path = path.resolve(
        __dirname,
        "..",
        "uploads",
        program.image2
      );
      if (fs.existsSync(image2Path)) {
        fs.unlink(image2Path, (err) => {
          if (err) console.error("Error deleting image2:", err);
        });
      }
    }

    await program.destroy();
    res.status(200).json({ message: "Program deleted successfully" });
  } catch (error) {
    console.error("Error deleting program:", error); // Log error for debugging
    res.status(500).json({ error: "Something went wrong" });
  }
}


// Get program by ID
exports.getProgramById = async (req, res) => {
  try {
    const program = await Programs.findByPk(req.params.id);

    if (!program) {
      return res.status(404).json({ error: "Program not found" });
    }

    res.status(200).json(program);
  } catch (error) {
    console.error("Error fetching program by ID:", error); // Log error for debugging
    res.status(500).json({ error: "Something went wrong" });
  }
};