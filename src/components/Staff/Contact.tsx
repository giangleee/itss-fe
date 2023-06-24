import { FC } from "react";
import { Link } from "react-router-dom";

interface ContactProps {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

const Contact: FC<ContactProps> = ({ facebook = "", instagram = "", twitter = "" }) => {
  return (
    <div className="flex flex-row gap-3 mt-2 justify-center">
      <ContactItem
        icon="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
        link={facebook}
      />
      <ContactItem
        icon="https://static-00.iconduck.com/assets.00/instagram-icon-1024x1024-8qt57uwd.png"
        link={instagram}
      />
      <ContactItem
        icon="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png"
        link={twitter}
      />
    </div>
  );
};

const ContactItem: FC<{ icon: string; link: string }> = ({ icon, link }) => {
  return (
    <Link to={link}>
      <img
        className="w-8"
        src={icon}
      />
    </Link>
  );
};
export default Contact;
