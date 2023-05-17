export default function Resister() {
    const handleResister = (event) => {
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
      };
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <form onSubmit={handleResister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <p>New to this website?</p>
                <a href="#" className="label-text-alt link link-hover ml-2">
                  Please Resister
                </a>
              </label>
            </div>
          </form>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>>
  );
}
