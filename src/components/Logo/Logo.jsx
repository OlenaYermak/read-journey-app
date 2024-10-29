import Icon from "../Icon/Icon.jsx";

import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logoWrapper}>
      <Icon id="icon-logo" width="42" height="17" className={css.icon} />
      <span className={css.logoText}>read journey</span>
    </div>
  );
}
