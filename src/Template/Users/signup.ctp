<div class="container">
    <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
            <h1 class="text-center login-title"><?php echo __('Sign up'); ?></h1>
            <div class="account-wall">
                <?= $this->element('site_logo'); ?>
                <?= $this->Flash->render(); ?>
                <?= $this->Form->create('Users',[
                    'url'=>['action'=>'signup'],
                    'templates'=>['submitContainer' => '<div class="submit form-group">{{content}}</div>'],
                ]);?>
                <?= $this->Form->input('first',[
                    'placeholder'=>__('First Name'),
                ]);?>
                <?= $this->Form->input('last',[
                    'placeholder'=>__('Last Name'),
                    'required'
                ]);?>
                <?= $this->Form->input('email',[
                    'placeholder'=>__('Email'),
                    'required'
                ]);?>
                <?= $this->Form->input('password',[
                    'type'=>'password',
                    'placeholder'=>__('Password'),
                    'required'
                ]);?>
                <?= $this->Form->submit(__('Sign up'),[
                    'class'=>'btn btn-lg btn-primary btn-block'
                ]);?>
                <?= $this->Form->end(); ?>
            </div>
            <?= $this->Html->link(
                __('Already have an account?'),
                ['action'=>'signin'],
                ['escape'=>false,'class' => 'text-center new-account']
            ); ?>
        </div>
    </div>
</div>
