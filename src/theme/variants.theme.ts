const useVariants = () => {
  const base = 'inline-flex items-center justify-center rounded-lg border text-xs py-1 px-2 font-medium w-fit whitespace-nowrap grow-0 shrink-0 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden shadow-md'
    const variants = [{
        default:
          'border-transparent bg-primary-500 text-white ',
        secondary:
          'border-transparent bg-secondary-600 text-gray-200 ',
        complete:
          'border-transparent bg-lime-200 text-lime-700 ',
        assistance:
          'border-transparent bg-teal-200 text-teal-700 ',
        destructive:
          'border-transparent bg-red-600 text-white ',
        outline:
          'bg-gray-100 text-gray-900 border border-gray-300 ',
        danger:
          'border-transparent bg-blue-200 text-destructive',
        success:
          'border-transparent bg-green-200 text-green-700 ',
        info:
          'border-transparent bg-blue-200 text-blue-700 ',
        service:
          'border-transparent bg-purple-200 text-purple-700 ',
        enhancement:
          'border-transparent bg-indigo-200 text-indigo-700 ',

      },
    ]
    
    return { base, variants } 
};

export default useVariants; 

