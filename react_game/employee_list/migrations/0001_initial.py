# Generated by Django 3.2.5 on 2021-07-04 19:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('department', models.CharField(choices=[('hr', 'Human Resources'), ('finance', 'Finance'), ('engineering', 'Engineering'), ('marketing', 'Marketing'), ('sales', 'Sales')], max_length=20)),
                ('salary', models.PositiveIntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='employees', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
