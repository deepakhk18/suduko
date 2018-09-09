<h1>Log in</h1>

<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<form form-for="user" submit-with="login()" validation-rules="validation_rules">
			<field-label label="Email"></field-label>
			<text-field attribute="email" type="email"></text-field>
			<field-label label="Password"></field-label>
			<a ui-sref="password_resets_new">(forgot password)</a>
			<text-field attribute="password" type="password"></text-field>
			<checkbox-field attribute="remember_me" label-class="checkbox inline" label="Remember me on this computer" uid="session_remember_me"></checkbox-field>
			<input class="btn btn-primary" name="commit" type="submit" value="Log in" />
		</form>
		<p>New user? <a href ui-sref="signup">Sign up now!</a></p>
	</div>
</div>





<h1>Forgot password</h1>

<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<form form-for="password_reset" submit-with="forgotPassword()" validation-rules="validation_rules">
			<div error-messages ng-if="error_messages" ng-model="error_messages" id="error_explanation"></div>
			<field-label label="Email"></field-label>
			<text-field attribute="email" type="email"></text-field>
			<input class="btn btn-primary" name="commit" type="submit" value="Submit" />
		</form>
	</div>
</div>
