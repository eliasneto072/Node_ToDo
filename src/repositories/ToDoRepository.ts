import ToDo from "../models/TodoModel";
import { IToDo } from "../models/interfaces/ITodo";
import { ObjectId } from 'mongodb';
import { Error } from "mongoose";

class ToDoRepository{

    async findAll(): Promise<IToDo[]> {
        try{
            return await ToDo.find();
        } catch(error){
            throw new Error(`Falha ao listar afazeres: ${(error as Error).message}`);
        }
    }

    async create(TodoData: IToDo): Promise<IToDo> {
        try{
            const novoTodo = new ToDo(TodoData);
            return await novoTodo.save();
        } catch(error){
            throw new Error(`Falha ao criar tarefa: ${(error as Error).message}`);
        }
    }

    async findById(id: string): Promise<IToDo | null> {
        try{
            return await ToDo.findOne({_id: new ObjectId(id)});
        } catch(error){
            throw new Error(`Falha ao encontar tarefa: ${(error as Error).message}`);
        }
    }

    async update(id: string, TodoData: Partial<IToDo>): Promise<IToDo | null> {
        try{
            return await ToDo.findOneAndUpdate({_id: new ObjectId(id)}, TodoData, {new: true});
        } catch(error){
            throw new Error(`Falha ao atualizar tarefa: ${(error as Error).message}`)
        }
    }

    async delete(id: string): Promise<boolean> {
        try{
            const result = await ToDo.findOneAndDelete({_id: new ObjectId(id)});
            return result !== null;
        } catch(error){
            throw new Error(`Falha ao deletar tarefa: ${(error as Error).message}`)
        }
    }
}

export default new ToDoRepository();