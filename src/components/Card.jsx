import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Card({ image, name, position, description, socialLinks, viewMoreLink }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-88">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        {position && <p className="text-gray-600 mb-2">{position}</p>}
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex items-center justify-between">
        {socialLinks && (
          <div className="flex space-x-4 mb-4">
            {socialLinks.facebook && (
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-600 hover:text-blue-600" />
              </a>
            )}
            {socialLinks.twitter && (
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="text-gray-600 hover:text-blue-400" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-600 hover:text-blue-700" />
              </a>
            )}
          </div>
        )}
         <a href={viewMoreLink} className=" pt-2 pb-2 pl-3 pr-3 bg-blue-500 text-white rounded-md cursor-pointer">
          View More
        </a>
        </div>
       
        <div className="flex items-end justify-end">
       
        </div>
       
      </div>
    </div>
  );
}
