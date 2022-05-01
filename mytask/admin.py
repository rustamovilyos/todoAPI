from django.contrib import admin
from .models import Task


class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'data', 'done')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title', 'data')
    list_editable = ('done', )
    list_filter = ('done', )


admin.site.register(Task, TaskAdmin)
