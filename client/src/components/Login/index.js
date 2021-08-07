import React from 'react'


export default function Login() {
    return (
        
        <form>
        <div class="mb-3">
          <label for="loginUserName" class="form-label">Username</label>
          <input type="text" class="form-control" id="loginUserName" placeholder="programmer123" />
        </div>
        <div class="mb-3">
          <label for="loginPassword" class="form-label">Password</label>
          <input type="password" class="form-control" id="loginPassword" placeholder="password" />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
        <button type="button" class="btn btn-primary">Signup</button>
      </form>
    )
}


