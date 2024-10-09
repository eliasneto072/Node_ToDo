import { Document, Schema, model } from "mongoose";

import { IToDo } from "./interfaces/ITodo";


export interface ITodoModel extends IToDo, Document {}

const TodoSchemas: Schema = new Schema<ITodoModel>({
    titulo: {type: String, required: true},
    descricao: {type: String, required: false},
    status: {type: Boolean, default: false}

})

const ToDo = model<ITodoModel>('ToDo', TodoSchemas);
export default ToDo;