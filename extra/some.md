# Updating Salary Schedule on Website


Refer to README.md in Python Repo

SSH into ah-dojo.pcwanetwork.net and trigger the nightly service. Phil says *hostname* is too expensive so use IP address.

```
ssh ~~ahendricks@10.122.81.52~~
sudo systemctl start people-admin.service
```

Check timestamps to verify it ran.

`ls -latrh /opt/python-repo/salary/csv`

Log out and copy over file.

`scp ahendricks@10.122.81.52:/opt/python-repo/salary/csv/www.csv ~/Downloads/employee-salary-schedule.csv`

Diff the current file on Cosmic with the new one, then upload the new one to the Cosmic "csv" folder.