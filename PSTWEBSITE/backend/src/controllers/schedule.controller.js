import { Schedule } from "../models/schedules.model.js";

//create schedule

const createSchedule = async (req, res) => {
    try {
        const { username, subject, room, time, day } = req.body;

        if (!username || !subject || !room || !time || !day){
            return res.status(400).json({
                message: "all fields needs to be filled"
            });
        }   
        const schedule = await Schedule.create({ username, subject, room, time, day });
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
        const schedules = await Schedule.find();
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
        const schedules = await Schedule.find({ username });
        
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

        const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {new: true});

        if(!schedule){
            return res.status(404).json({
            message: "schedule not found"
            });
        } 

        res.status(200).json({
            message: "schedule updated successfully", schedule
        });
    } catch (error){ 
        res.status(500).json({
            message: "SERVER ERROR"
        });
    }
}

const deleteSchedule = async (req, res) => {
    try {
        const deleted = await Schedule.findByIdAndDelete(req.params.id);
        if (!deleted){
            return res.status(400).json({
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