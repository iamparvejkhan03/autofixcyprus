import { useRef } from 'react';

const FileUpload = ({ name, register, setValue, watch, errors }) => {
  const fileInputRef = useRef(null);
  const files = watch(name, []);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const updatedFiles = [...files, ...selectedFiles].slice(0, 6);
    setValue(name, updatedFiles, { shouldValidate: true });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    const updatedFiles = [...files, ...droppedFiles].slice(0, 6);
    setValue(name, updatedFiles, { shouldValidate: true });
  };

  const removeFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setValue(name, updatedFiles, { shouldValidate: true });
  };

  return (
    <div 
      className="rounded-lg border-2 border-dashed border-gray-300 hover:border-blue-400 p-6 text-center transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        {...register(name, { required: "Please upload at least one photo" })}
        type="file"
        ref={fileInputRef}
        multiple
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      
      {/* Rest of your FileUpload component UI */}
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-camera w-8 h-8 text-blue-600">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      </div>
      
      <h4 className="text-lg font-semibold text-gray-900 mb-2">
        Drop photos here or click to upload
      </h4>
      
      <p className="text-gray-600 mb-4">Supported formats: JPG, PNG, HEIC (Max 10MB each)</p>
      
      <button
        type="button"
        onClick={() => fileInputRef.current.click()}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background h-10 px-4 py-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer"
      >
        Choose Files
      </button>
      
      {/* File previews */}
      {files.length > 0 && (
        <div className="mt-6">
          <h5 className="text-sm font-medium text-gray-700 mb-2">Selected files ({files.length}/6):</h5>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {files.map((file, index) => (
              <div key={index} className="relative group">
                <div className="h-20 w-full lg:h-32 lg:w-52 bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={`Preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      {errors[name] && <p className="text-red-500 text-sm mt-2">{errors[name].message}</p>}
    </div>
  );
};

export default FileUpload;