import {Link} from "react-router-dom";

function Navigation(){
    return(
        <div>
            <button>
                <Link to={{
                    pathname: `/main`
                }}>
                    Main
                </Link>
            </button>
            <button>
                <Link to={{
                    pathname: `/scheduler`
                }}>
                    Scheduler
                </Link>
            </button>
            <button>
                <Link to={{
                    pathname: `/setting`
                }}>
                    Setting
                </Link>
            </button>
        </div>
    );
}

export default Navigation;