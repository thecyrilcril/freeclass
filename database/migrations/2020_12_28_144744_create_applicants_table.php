<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('label', 36);
            $table->string('first_name', 20);
            $table->string('last_name', 20);
            $table->string('gender', 6);
            $table->string('email', 100);
            $table->string('phone_number', 11);
            $table->string('stay_in_ilorin', 3);
            $table->string('experience', 80);
            $table->string('channel', 10);
            $table->boolean('is_accepted')->default(false);
            $table->timestamps();
            $table->engine = 'InnoDB';
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
