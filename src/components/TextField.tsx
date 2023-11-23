

export const TextInput = (props: { type?:string, label?:string, placeholder?:string, value?:string, onChange: (ele: string) => void} ) => {

    function handleChange(event: any) {
        props.onChange(event.target.value)
    }
    return (
        <div className="flex flex-col">
          <label htmlFor={props.label} className="block text-gray-700 text-sm font-bold my-2">
            {props.label}
          </label>
          <input
          type={props.type}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={props.placeholder}
            onChange={handleChange}
            value={props.value}
          />
        </div>
      );
}


export const TextAreaInput = (props: {label?:string, placeholder?:string, value?:string, onChange: (ele: string) => void} ) => {

    function handleChange(event: any) {
        props.onChange(event.target.value)
    }
    return (
        <div className="flex flex-col">
          <label htmlFor={props.label} className="block text-gray-700 text-sm font-bold my-2">
            {props.label}
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={props.placeholder}
            onChange={handleChange}
            value={props.value}
          />
        </div>
      );
}


export const TextFile = (props: { type?:string, label?:string, value?:string, onChange: (ele: string) => void} ) => {

    function handleChange(event: any) {
        props.onChange(event.target.files?.[0] || null)
    }
        return (
            <div className="flex flex-col">
              <label htmlFor={props.label} className="block text-gray-700 text-sm font-bold my-2">
                {props.label}
              </label>
              <input
              type={props.type}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={handleChange}
                value={props.value}
              />
            </div>
          );
}