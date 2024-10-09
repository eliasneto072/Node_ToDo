import ToDoRepository from "../repositories/ToDoRepository";
import { IToDo } from "../models/interfaces/ITodo";

export class ToDoService{

    private repository = ToDoRepository;

    async getAllToDo(): Promise<IToDo[]> {
        return this.repository.findAll()
    }

    async createToDo(todoData: IToDo): Promise<IToDo> {
        return this.repository.create(todoData)
    }

    async getToDoById(id: string): Promise<IToDo | null> {
        return this.repository.findById(id)
    }

    async updateToDo(id: string, todoData : Partial<IToDo>): Promise<IToDo | null> {
        return this.repository.update(id, todoData)
    }

    async deleteToDo(id: string): Promise<boolean> {
        return this.repository.delete(id)
    }
}