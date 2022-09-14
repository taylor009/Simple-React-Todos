import axios, {AxiosResponse} from 'axios'

const baseUrl: string = 'http://localhost:4000'

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    return await axios.get(
      baseUrl + '/todos'
    )
  } catch (error: string | any) {
    throw new Error(error as string)
  }
}

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, '_id'> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    return await axios.post(
      baseUrl + '/add-todo',
      todo
    )
  } catch (error: string | any) {
    throw new Error(error)
  }
}

export const updateTodo = async (
  todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todoUpdate: Pick<ITodo, 'status'> = {
      status: true,
    }
    return await axios.put(
      `${baseUrl}/edit-todo/${todo._id}`,
      todoUpdate
    )
  } catch (error: string | any) {
    throw new Error(error)
  }
}

export const deleteTodo = async (
  _id: string
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    return await axios.delete(
      `${baseUrl}/delete-todo/${_id}`
    )
  } catch (error: string | any) {
    throw new Error(error)
  }
}
