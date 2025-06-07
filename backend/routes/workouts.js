// Workout tracking endpoints: fetch templates, start session, track sets
const express = require("express");
const { authenticateToken } = require("./auth");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// Get all workout templates
router.get("/templates", async (req, res) => {
  try {
    const templates = await prisma.workoutTemplate.findMany({
      include: {
        exercises: {
          include: { exercise: true },
          orderBy: { order: "asc" },
        },
      },
    });
    res.json(templates);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workout templates" });
  }
});

// Start a workout session
router.post("/start", authenticateToken, async (req, res) => {
  try {
    const { templateId } = req.body;
    const session = await prisma.workoutSession.create({
      data: {
        userId: req.user.userId,
        templateId,
      },
      include: { template: true },
    });
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: "Failed to start workout session" });
  }
});

// Add a set to a workout session
router.post("/session/:sessionId/set", authenticateToken, async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { exerciseId, setNumber, reps, weight } = req.body;
    const set = await prisma.workoutSet.create({
      data: {
        sessionId: Number(sessionId),
        exerciseId,
        setNumber,
        reps,
        weight,
      },
    });
    res.status(201).json(set);
  } catch (error) {
    res.status(500).json({ error: "Failed to add set" });
  }
});

// Get all sessions for the current user
router.get("/sessions", authenticateToken, async (req, res) => {
  try {
    const sessions = await prisma.workoutSession.findMany({
      where: { userId: req.user.userId },
      include: {
        template: true,
        sets: { include: { exercise: true }, orderBy: { setNumber: "asc" } },
      },
      orderBy: { startedAt: "desc" },
    });
    res.json(sessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workout sessions" });
  }
});

module.exports = router;
