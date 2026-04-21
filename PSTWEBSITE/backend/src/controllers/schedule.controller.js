import { Schedule } from "../models/schedules.model.js";
import { User } from "../models/user.model.js";

//create schedule

const createSchedule = async (req, res) => {
    try {
        const { username, subject, room, time, day } = req.body;
        const normalizedUsername = username?.toLowerCase().trim();

        if (!normalizedUsername || !subject || !room || !time || !day){
            return res.status(400).json({
                message: "all fields needs to be filled"
            });
        }

        const userExists = await User.findOne({ username: normalizedUsername });

        if (!userExists) {
            return res.status(404).json({
                message: "User is not registered"
            });
        }

        const schedule = await Schedule.create({
            username: normalizedUsername,
            subject,
            room,
            time,
            day
        });
            res.status(201).json({
                message: "Schedule created successfully",
                schedule
            });
    } catch (error) {
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const getSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find({ username: req.user.username });
        res.status(200).json(schedules);
    } catch (error) {
          res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const getScheduleByUsername = async (req, res) => {
    try {
        const { username } = req.params;
        const normalizedUsername = username.toLowerCase();

        if (normalizedUsername !== req.user.username.toLowerCase()) {
            return res.status(403).json({
                message: "You can only access your own schedules"
            });
        }

        const schedules = await Schedule.find({ username: normalizedUsername });
        
        if (!schedules || schedules.length === 0) {
            return res.status(404).json({
                message: "No schedules found for this username"
            });
        }
        
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const updateSchedule = async (req, res) => {
    try {
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({
                message: "No data provided"
            });
        }

        const schedule = await Schedule.findOne({ _id: req.params.id, username: req.user.username });

        if(!schedule){
            return res.status(404).json({
            message: "schedule not found"
            });
        } 

        delete req.body.username;
        Object.assign(schedule, req.body);
        const updatedSchedule = await schedule.save();

        res.status(200).json({
            message: "schedule updated successfully", schedule: updatedSchedule
        });
    } catch (error){ 
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const deleteSchedule = async (req, res) => {
    try {
        const deleted = await Schedule.findOneAndDelete({ _id: req.params.id, username: req.user.username });
        if (!deleted){
            return res.status(404).json({
                message: "Schedule not found"
            });
        }

        res.status(200).json({
            message: "Schedule deleted successfully"
        });
    } catch (error) {
         res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}
export {
    createSchedule,
    getSchedules,
    getScheduleByUsername,
    updateSchedule,
    deleteSchedule
};
