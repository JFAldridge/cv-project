import React from 'react';

function CVImageForm({section, imageChangeHandle, formDisplay}) {
    
    const displayForm = () => {
        formDisplay(null);
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            imageChangeHandle(reader.result);
        }

        reader.readAsDataURL(file);
    } 
    
    return(
        <div className="form-modal">
            <div className="form-container">
                <i 
                    className="bi bi-x-square close-form"
                    onClick={displayForm}
                ></i>
                <h2>{capitalizeFirstLetter(section)}</h2>
                <form>
                    <input 
                        type="file" 
                        name="portrait-file" 
                        id="portrai-file" 
                        onChange={(e) => handleImageChange(e)}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={displayForm}
                        type="button"
                    >Done</button>
                </form>
            </div>
        </div>
    );
}

export default CVImageForm;
