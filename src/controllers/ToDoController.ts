import { Request, Response } from "express";
import { ToDoService } from "../services/ToDoService";
import { validationResult } from "express-validator";

const service = new ToDoService();

export class ToDoController{

    async getAll(req: Request, res: Response): Promise<Response> {
        const todoAll = await service.getAllToDo();
        return res.json(todoAll);
    }

    async create(req: Request, res: Response): Promise<Response> {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()){
            res.status(400).json({"errors": errors.array()});
        }

        const todoData = await service.createToDo(req.body);
        return res.status(201).json(todoData);
    }

    async getById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const todo = await service.getToDoById(id);

        if(!todo){
            return res.status(400).json({message: "Não encontrado!"});
        }

        return res.json(todo);
    }

    async update(req: Request, res: Response): Promise<Response> {
        const { id } = req.params
        const updateTodo = await service.updateToDo(id, req.body);

        if (!updateTodo){
            return res.status(404).json({ message: 'Tarefa não econtrada' });
        }

        return res.json(updateTodo)
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const deleteTodo = await service.deleteToDo(id);

        if (!deleteTodo){
            return res.status(404).json({message: "Tarefa não encontrada"});
        }

        return res.json({ message: "Tarefa deletada com sucesso"});
    }
}