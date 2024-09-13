import NavBar
 from "../components/Navbar";

function Contact() {
    return (
        <>
        <NavBar></NavBar>
        <form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="validationTooltip01">First name</label>
      <input type="text" class="form-control" id="validationTooltip01" placeholder="First name" value="Mark" required></input>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltip02">Last name</label>
      <input type="text" class="form-control" id="validationTooltip02" placeholder="Last name" value="Otto" required></input>
      <div class="valid-tooltip">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationTooltipUsername">Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
        </div>
        <input type="email" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required></input>
       
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationTooltip03">phone number</label>
      <input type="text" class="form-control" id="validationTooltip03" placeholder="phone number" required></input>
      
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationTooltip04">reasons for contacting us</label>
<textarea>

</textarea>
      <div class="invalid-tooltip">
        Please provide a valid state.
      </div>
    </div>


  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
     
        </>
    )
}

export default Contact;