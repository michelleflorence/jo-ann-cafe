import styles from "./ContactSection.module.scss";
import Button from "@/components/Button/Button";
import InputField from "@/components/InputField/InputField";

const ContactSection = () => {
  return (
    <div className={styles["contact"]}>
      <div className={styles["card"]}>
        <div className={styles["left"]}>
          <div className={styles["title"]}>
            <span className={styles["highlighted"]}>Make</span> Reservation
          </div>
          <div className={styles["subtitle"]}>
            Plan your visit ahead and we’ll have your favorite spot waiting — no
            rush, just comfort.
          </div>
          <form className={styles["form"]}>
            <InputField
              type="text"
              label="Full Name"
              name="name"
              placeholder="Enter your Full Name"
            />
            <InputField
              type="text"
              label="Phone Number"
              name="phone_number"
              placeholder="Enter your Phone Number"
            />
            <InputField
              defaultValue="14:00"
              type="time"
              label="Time"
              name="time"
            />
            <InputField
              type="textarea"
              label="Message"
              name="message"
              placeholder="Enter your message"
            />
            <Button type="button">Order Now</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
