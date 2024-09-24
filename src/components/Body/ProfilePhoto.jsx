import image from "../../assets/images/profile.jpg"

export function ProfilePhoto() {
    return (
        <div className="w-48 h-48 rounded-full bg-white flex items-center justify-center z-10 mx-5">
            <img src={image} className="rounded-full h-44 w-44 object-cover"/>
        </div>

    );
}