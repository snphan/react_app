# Generated by Django 3.2.5 on 2021-07-04 19:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employee_list', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='user',
            new_name='created_by',
        ),
    ]