import { categories } from '../data/categories';

export const Form = () => {



  return (
    <form
      className="space-y-5 bg-white shadow p-10 rounded-lg "
    >
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">Categoría:</label>
        <select 
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          name="" 
          id="category"
        >
          { categories.map( category => (
            <option 
              key={category.id}
              value={category.id}
            >
              { category.name }
            </option>
          )) }
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="activity" className="font-bold">Actividad:</label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="text"
          id="activity"
          name="activity"
          placeholder="Ej. Comida, Jugo, Ejercicio..."
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">Calorias:</label>
        <input
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          type="number"
          id="calories"
          name="calories"
          placeholder="Calorias ej. 300, 500..."
        />
      </div>

        <input
          className="bg-gray-800 hover:bg-gray-900 text-white font-bold uppercase p-2 w-full rounded cursor-pointer"
          type="submit"
          value='Guardar comida o ejercicio'
        />

    </form>
  )
}
